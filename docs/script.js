// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and topics
document.querySelectorAll('.category-card, .topic-item, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Add search functionality (optional)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar tópicos...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 500px;
        margin: 2rem auto;
        display: block;
        padding: 1rem;
        border: 2px solid var(--border-color);
        border-radius: 0.5rem;
        font-size: 1rem;
        font-family: inherit;
    `;

    const topicsListSection = document.querySelector('.topics-list .container');
    if (topicsListSection) {
        topicsListSection.insertBefore(searchInput, topicsListSection.firstChild);
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const topics = document.querySelectorAll('.topic-item');
        
        topics.forEach(topic => {
            const text = topic.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                topic.style.display = 'flex';
            } else {
                topic.style.display = 'none';
            }
        });
    });
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    addSearchFunctionality();
    
    // Add copy link functionality to topics
    document.querySelectorAll('.topic-item').forEach(item => {
        item.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const url = window.location.origin + window.location.pathname + item.getAttribute('href');
            navigator.clipboard.writeText(url).then(() => {
                // Show a brief notification
                const notification = document.createElement('div');
                notification.textContent = 'Link copiado!';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: var(--success-color);
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 0.5rem;
                    box-shadow: var(--shadow-lg);
                    z-index: 1000;
                    animation: slideIn 0.3s ease;
                `;
                document.body.appendChild(notification);
                setTimeout(() => {
                    notification.remove();
                }, 2000);
            });
        });
    });
});

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
