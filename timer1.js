// Extract the command-line arguments excluding the first two (which are 'node' and the script name)
const args = process.argv.slice(2);

// Validate 
if (args.length === 0) {
  console.log("No timers provided. Please specify one or more timers in seconds.");
  process.exit(1); // Exit with error code 1
}

// Function to set the timer for each specified duration
for (const arg of args) {
  const duration = parseInt(arg);
  if (isNaN(duration) || duration <= 0) {
    // Ignore negative numbers and non-numeric inputs
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07'); // System sound (beep)
    }, duration * 1000); // Convert seconds to milliseconds
  }
}
