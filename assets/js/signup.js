let isLoginMode = true;

function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchBtn = document.getElementById('switchBtn');
    const welcomeTitle = document.getElementById('welcomeTitle');
    const welcomeText = document.getElementById('welcomeText');
    const leftPanel = document.getElementById('leftPanel');

    if (isLoginMode) {
        // Switch to signup mode
        loginForm.classList.add('slide-out');
        setTimeout(() => {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            signupForm.classList.add('slide-in');
        }, 300);    

        // Update left panel content
        welcomeTitle.textContent = 'Create your account here ';
        welcomeText.innerHTML = 'Already have an account?<br>Sign in here!';
        switchBtn.textContent = 'Sign In';
        isLoginMode = false;
    } else {
        // Switch to login mode
        signupForm.classList.add('slide-out');
        setTimeout(() => {
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            loginForm.classList.add('slide-in');
        }, 300);

        // Update left panel content
        welcomeTitle.textContent = 'Welcome!';
        welcomeText.innerHTML = 'Create your account.<br>For Free!';
        switchBtn.textContent = 'Sign Up';
        leftPanel.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';

        isLoginMode = true;
    }

    // Remove animation classes after animation completes
    setTimeout(() => {
        loginForm.classList.remove('slide-in', 'slide-out');
        signupForm.classList.remove('slide-in', 'slide-out');
    }, 600);
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation
    if (email && password) {
        alert('Login successful! (This is a demo)');
    } else {
        alert('Please fill in all fields');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        document.getElementById('confirmPassword').classList.add('error');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        document.getElementById('signupPassword').classList.add('error');
        return;
    }

    alert('Account created successfully! (This is a demo)');
}

// Remove error styling when user starts typing
document.addEventListener('input', function (event) {
    if (event.target.classList.contains('error')) {
        event.target.classList.remove('error');
    }
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});