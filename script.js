document.addEventListener('DOMContentLoaded', function() {

    const phrase = "Tip Calculator";
    const typingElement = document.getElementById('typing-effect');
    let i = 0;

    setTimeout(function() {
        window.location.href = 'https://github.com/cestrada3/ITMD441/blob/main/home.html';
    }, 60000);

    function typeWriter() {
        if (i < phrase.length) {
            typingElement.innerHTML += phrase.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

    setTimeout(function() {
        window.history.back();
    }, 35000);

    typeWriter();

    function validateNumber() {
        const billInput = document.getElementById('bill');
        const errorMessage = document.getElementById('error-message');
        if (!/^\d*\.?\d*$/.test(billInput.value)) { 
            errorMessage.style.display = 'block'; 
        } else {
            errorMessage.style.display = 'none';
            calc1(); 
            
        }
    }

    function calc1() {
        let bill = parseFloat(document.getElementById("bill").value).toFixed(2);
        let tipPercent = document.getElementById("tipslider").value;

        if (bill < 0) {
        } else {
            document.getElementById("tipprecent").value = tipPercent;
            calc2();
        }
    }

    function calc2() {
        let bill = parseFloat(document.getElementById("bill").value);
        let tipPercent = parseInt(document.getElementById("tipslider").value);
        
        document.getElementById("tipprecent").value = tipPercent;
        
        let tipAmount = bill * tipPercent / 100;
        document.getElementById("tipamount").value = tipAmount.toFixed(2);
        
        let totalWithTip = bill + tipAmount;
        document.getElementById("total").value = totalWithTip.toFixed(2);
        
    }

    document.getElementById("bill").addEventListener('input', validateNumber);
    document.getElementById("tipslider").addEventListener('input', calc2);
});