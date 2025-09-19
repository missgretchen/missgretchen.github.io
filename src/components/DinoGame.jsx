import React, { useState, useEffect, useRef, useCallback } from 'react'
import './DinoGame.css'

const DinoGame = () => {
  const canvasRef = useRef(null)
  const gameLoopRef = useRef(null)
  const [gameState, setGameState] = useState('ready') // 'ready', 'playing', 'gameOver'
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  // Game state
  const gameStateRef = useRef({
    alien: {
      x: 80,
      y: 0,
      width: 20,
      height: 20,
      velocityY: 0,
      isJumping: false,
      groundY: 0
    },
    cacti: [],
    gameSpeed: 1.5,
    lastCactusTime: 0,
    cactusInterval: 3000,
    gravity: 0.6,
    jumpPower: -10
  })

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    // Set canvas size
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    
    // Set ground position
    gameStateRef.current.alien.groundY = rect.height - 20
    gameStateRef.current.alien.y = gameStateRef.current.alien.groundY

    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('dinoHighScore')
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore))
    }

    // Draw initial state
    setTimeout(() => {
      gameLoop()
    }, 100)

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [])

  // Game loop
  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const state = gameStateRef.current

    // Clear canvas
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, rect.width, rect.height)

    if (gameState === 'playing') {
      // Update alien physics
      if (state.alien.isJumping) {
        state.alien.velocityY += state.gravity
        state.alien.y += state.alien.velocityY

        // Check if alien hits ground
        if (state.alien.y >= state.alien.groundY) {
          state.alien.y = state.alien.groundY
          state.alien.velocityY = 0
          state.alien.isJumping = false
        }
      }

      // Update cacti
      state.cacti = state.cacti.filter(cactus => {
        cactus.x -= state.gameSpeed
        return cactus.x > -cactus.width
      })

      // Spawn new cacti
      const now = Date.now()
      if (now - state.lastCactusTime > state.cactusInterval) {
        state.cacti.push({
          x: rect.width,
          y: state.alien.groundY,
          width: 15,
          height: 20
        })
        state.lastCactusTime = now
        
        // Increase difficulty (slower progression)
        state.gameSpeed += 0.05
        state.cactusInterval = Math.max(1500, state.cactusInterval - 5)
      }

      // Check collisions
      const alien = state.alien
      for (const cactus of state.cacti) {
        if (alien.x < cactus.x + cactus.width &&
            alien.x + alien.width > cactus.x &&
            alien.y < cactus.y + cactus.height &&
            alien.y + alien.height > cactus.y) {
          // Game over
          setGameState('gameOver')
          if (score > highScore) {
            setHighScore(score)
            localStorage.setItem('dinoHighScore', score.toString())
          }
          return
        }
      }

      // Update score
      setScore(prev => prev + 1)
    }

    // Draw ground line
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, state.alien.groundY + state.alien.height)
    ctx.lineTo(rect.width, state.alien.groundY + state.alien.height)
    ctx.stroke()

    // Draw alien (pixel art)
    drawAlien(ctx, state.alien.x, state.alien.y, state.alien.width, state.alien.height)

    // Draw plants
    state.cacti.forEach(plant => {
      drawPlant(ctx, plant.x, plant.y, plant.width, plant.height)
    })

    // UI text is now handled by HTML overlay

    // Draw score
    ctx.fillStyle = '#000000'
    ctx.font = '12px monospace'
    ctx.textAlign = 'left'
    ctx.fillText(`Score: ${score}`, 10, 16)
    ctx.fillText(`High: ${highScore}`, 10, 32)

    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }
  }, [gameState, score, highScore])

  // Start game loop when playing, or draw initial state
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(gameLoop)
    } else {
      // Draw initial state for ready/gameOver
      gameLoop()
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, gameLoop])

  // Draw pixel alien
  const drawAlien = (ctx, x, y, width, height) => {
    ctx.fillStyle = '#000000'
    
    // Alien character design - large head, big eyes, small body
    const pixels = [
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 0, 1, 1], // Big eyes
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0], // Small body
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 0]  // Legs
    ]

    const pixelSize = Math.min(width / 8, height / 11)
    
    for (let row = 0; row < pixels.length; row++) {
      for (let col = 0; col < pixels[row].length; col++) {
        if (pixels[row][col]) {
          ctx.fillRect(
            x + col * pixelSize,
            y + row * pixelSize,
            pixelSize,
            pixelSize
          )
        }
      }
    }
  }

  // Draw pixel plant
  const drawPlant = (ctx, x, y, width, height) => {
    ctx.fillStyle = '#000000'
    
    // Simple plant shape - like a small tree or bush
    const pixels = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0], // Top leaves
      [0, 1, 1, 0, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0], // Trunk
      [0, 0, 0, 1, 1, 0, 0, 0],
    ]

    const pixelSize = Math.min(width / 8, height / 10)
    
    // Draw the plant
    for (let row = 0; row < pixels.length; row++) {
      for (let col = 0; col < pixels[row].length; col++) {
        if (pixels[row][col]) {
          ctx.fillRect(
            x + col * pixelSize,
            y + row * pixelSize,
            pixelSize,
            pixelSize
          )
        }
      }
    }
  }

  // Handle jump
  const jump = useCallback(() => {
    const state = gameStateRef.current
    if (!state.alien.isJumping && gameState === 'playing') {
      state.alien.velocityY = state.jumpPower
      state.alien.isJumping = true
    } else if (gameState === 'ready' || gameState === 'gameOver') {
      // Start or restart game
      setGameState('playing')
      setScore(0)
      state.cacti = []
      state.gameSpeed = 1.5
      state.cactusInterval = 3000
      state.lastCactusTime = 0
      state.alien.y = state.alien.groundY
      state.alien.velocityY = 0
      state.alien.isJumping = false
    }
  }, [gameState])

  // Keyboard and touch controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault()
        jump()
      }
    }

    const handleTouch = (e) => {
      e.preventDefault()
      jump()
    }

    const handleClick = (e) => {
      e.preventDefault()
      jump()
    }

    // Add keyboard controls
    window.addEventListener('keydown', handleKeyPress)
    
    // Add touch controls for mobile
    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener('touchstart', handleTouch, { passive: false })
      canvas.addEventListener('click', handleClick)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      if (canvas) {
        canvas.removeEventListener('touchstart', handleTouch)
        canvas.removeEventListener('click', handleClick)
      }
    }
  }, [jump])

  return (
    <div className="dino-game-container">
      <canvas
        ref={canvasRef}
        className="dino-game-canvas"
      />
      {(gameState === 'ready' || gameState === 'gameOver') && (
        <div 
          className="game-overlay" 
          onClick={jump}
          onTouchStart={jump}
        >
          <div className="game-message">
            {gameState === 'ready' && (
              <p>Tap or press SPACE to start</p>
            )}
            {gameState === 'gameOver' && (
              <p>GAME OVER<br />Tap or press SPACE to restart</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default DinoGame
