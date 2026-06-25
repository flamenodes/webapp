export default defineNitroPlugin(() => {
  console.log('🔧 Initializing background workers...')
  
  // Delay worker initialization to ensure Redis is ready
  setTimeout(() => {
    // Import workers to start them
    import('../../src/serverActions/queue/deployment-worker')
      .then(() => console.log('✅ Deployment worker initialized'))
      .catch((err) => console.warn('⚠️  Deployment worker skipped (Redis unavailable):', err.message))
    
    import('../../src/serverActions/queue/email-worker')
      .then(() => console.log('✅ Email worker initialized'))
      .catch((err) => console.warn('⚠️  Email worker skipped:', err.message))
    
    import('../../src/serverActions/queue/expiration-worker')
      .then(() => console.log('✅ Expiration worker initialized'))
      .catch((err) => console.warn('⚠️  Expiration worker skipped:', err.message))
  }, 1000) // Wait 1 second for Redis to be ready
})
