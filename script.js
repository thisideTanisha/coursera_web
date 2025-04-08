(function () {
    // Encapsulate code in an IIFE to avoid global variables
    const init = function () {
        // Get elements using a modular approach
        const counterElement = document.getElementById('counter');
        const button = document.getElementById('increment-btn');
        
        let count = 0;

        // Add event listener (no onclick attribute)
        button.addEventListener('click', function () {
            count += 1;
            counterElement.textContent = count;
        });
    };

    // Run init when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', init);
})();
