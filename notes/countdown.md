  ## Concept
   - Cleanup function runs on unmount or when dependency array changes & it re-runs.
  
  ## Timer Logic Effect
  - Case: Don't forget to put run clearInterval on reaching timer value 0 (otherwise clearInterval will run indefinitely)

  - BruteForce => Using useEffect dependency array to update timer value (replacing new setInterval & clearing the one before)
       - useEffect will run 1 extra time
       - setInterval will run 1 extra time
       - pass clearInterval in useEffect cleanup to remove previous setInterval & in setInterval final condition to stop interval

  - Informed Approach: Setting up setInterval once, using setter function to get updated state value instead
       - useEffect and setInterval do not run 1 extra time here.
       - no need to pass clearInterval in cleanup function here.
