// Initial values
let tokensEarned = 0;
const totalTokens = 100;
let claimedTokens = 0;

// Claim button click handler
document.getElementById("claimButton").addEventListener("click", () => {
    if (claimedTokens < totalTokens) {
        claimedTokens += 10; // Increase claimed tokens by 10
        tokensEarned += 10;

        // Update progress bar and stats
        document.getElementById("progress").style.width = `${(claimedTokens / totalTokens) * 100}%`;
        document.getElementById("tokensEarned").innerText = tokensEarned;

        // Simulate claim time reduction
        document.getElementById("nextClaimTime").innerText = "1h 20m";

        alert('You claimed 10 tokens!');
    } else {
        alert('No more tokens to claim!');
    }
});