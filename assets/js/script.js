document.addEventListener('DOMContentLoaded', function() {
    // Get all action buttons
    const likeBtn = document.querySelector('.like-btn');
    const commentBtn = document.querySelector('.comment-btn');
    const shareBtn = document.querySelector('.share-btn');
    const bookmarkBtn = document.querySelector('.bookmark-btn .action-btn');
    const likesCount = document.querySelector('.likes-count span');
    const viewComments = document.querySelector('.view-comments');

    let isLiked = false;
    let isBookmarked = false;
    let currentLikes = 10500;

    // Like button functionality
    likeBtn.addEventListener('click', function() {
        const heartIcon = this.querySelector('i');
        
        if (!isLiked) {
            // Like the post
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
            this.classList.add('liked');
            currentLikes++;
            isLiked = true;
            
            // Add animation
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        } else {
            // Unlike the post
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            this.classList.remove('liked');
            currentLikes--;
            isLiked = false;
        }
        
        // Update likes count
        function formatLikes(count) {
            if (count >= 1000) {
                return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
            }
            return count.toString();
        }
        likesCount.textContent = `${formatLikes(currentLikes)} likes`;
    });

    // Bookmark button functionality
    bookmarkBtn.addEventListener('click', function() {
        const bookmarkIcon = this.querySelector('i');
        
        // Add animation
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Redirect to Instagram profile after animation
        setTimeout(() => {
            window.open('https://www.instagram.com/oja_tp/', '_blank');
        }, 200);
    });

    // Comment button functionality
    commentBtn.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Redirect to Instagram profile after animation
        setTimeout(() => {
            window.open('https://www.instagram.com/oja_tp/', '_blank');
        }, 200);
    });

    // Share button functionality
    shareBtn.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Redirect to Instagram profile after animation
        setTimeout(() => {
            window.open('https://www.instagram.com/oja_tp/', '_blank');
        }, 200);
    });

    // View comments functionality
    viewComments.addEventListener('click', function() {
        this.style.color = '#262626';
        setTimeout(() => {
            this.style.color = '#8e8e8e';
        }, 200);
        
        // Redirect to Instagram profile after animation
        setTimeout(() => {
            window.open('https://www.instagram.com/oja_tp/', '_blank');
        }, 300);
    });

    // Profile links functionality
    const profileLinks = document.querySelectorAll('.profile-link, .username-link, .caption-username-link');
    profileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent other click handlers from interfering
            // Let the default link behavior happen
        });
    });

    // Add hover effects for better interactivity
    const allActionBtns = document.querySelectorAll('.action-btn');
    
    allActionBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            if (!this.classList.contains('liked')) {
                this.style.transform = 'scale(1)';
            }
        });
    });

    // Add loading effect simulation
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.transition = 'opacity 0.3s ease';
            }, 100);
        });
    });

    // Add card entrance animation
    const card = document.querySelector('.instagram-card');
    setTimeout(() => {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
    }, 100);

    // Image carousel functionality
    const carouselImages = document.getElementById('carouselImages');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.carousel-dot');
    const carouselImageElements = document.querySelectorAll('.carousel-image');
    
    let currentImageIndex = 0;
    const totalImages = carouselImageElements.length;

    function updateCarousel() {
        const translateX = -currentImageIndex * 100;
        carouselImages.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });
        
        // Show/hide navigation buttons using opacity instead of display
        prevBtn.style.opacity = currentImageIndex === 0 ? '0' : '1';
        prevBtn.style.pointerEvents = currentImageIndex === 0 ? 'none' : 'auto';
        nextBtn.style.opacity = currentImageIndex === totalImages - 1 ? '0' : '1';
        nextBtn.style.pointerEvents = currentImageIndex === totalImages - 1 ? 'none' : 'auto';
        
        console.log('Carousel updated - current index:', currentImageIndex, 'total images:', totalImages);
    }

    function nextImage() {
        if (currentImageIndex < totalImages - 1) {
            currentImageIndex++;
            updateCarousel();
        }
    }

    function prevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateCarousel();
        }
    }

    function goToImage(index) {
        currentImageIndex = index;
        updateCarousel();
    }

    // Event listeners for carousel
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Next button clicked, current index:', currentImageIndex);
        nextImage();
    });
    
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Prev button clicked, current index:', currentImageIndex);
        prevImage();
    });

    indicators.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Dot clicked, going to index:', index);
            goToImage(index);
        });
    });

    // Initialize carousel
    updateCarousel();
    
    // Debug: Check if elements exist
    console.log('Carousel elements found:');
    console.log('carouselImages:', carouselImages);
    console.log('prevBtn:', prevBtn);
    console.log('nextBtn:', nextBtn);
    console.log('indicators:', indicators);
    console.log('carouselImageElements:', carouselImageElements);
    console.log('totalImages:', totalImages);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });

    // Touch/swipe functionality for mobile
    let startX = 0;
    let endX = 0;

    carouselImages.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    carouselImages.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - next image
                nextImage();
            } else {
                // Swiped right - previous image
                prevImage();
            }
        }
    }

    // Double-tap to like functionality (for mobile)
    let tapCount = 0;
    const imageCarousel = document.querySelector('.image-carousel');
    
    imageCarousel.addEventListener('click', function(e) {
        tapCount++;
        
        if (tapCount === 1) {
            setTimeout(() => {
                if (tapCount === 1) {
                    // Single tap - do nothing or show image in fullscreen
                    console.log('Single tap on image');
                }
                tapCount = 0;
            }, 300);
        } else if (tapCount === 2) {
            // Double tap - like the post
            if (!isLiked) {
                likeBtn.click();
                
                // Show heart animation on image
                const heart = document.createElement('div');
                heart.innerHTML = '<i class="fas fa-heart"></i>';
                heart.style.position = 'absolute';
                heart.style.fontSize = '60px';
                heart.style.color = '#e1306c';
                heart.style.left = '50%';
                heart.style.top = '50%';
                heart.style.transform = 'translate(-50%, -50%) scale(0)';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '10';
                heart.style.transition = 'all 0.6s ease';
                heart.style.textShadow = '0 0 20px rgba(225, 48, 108, 0.5)';
                
                const cardImage = document.querySelector('.card-image');
                cardImage.style.position = 'relative';
                cardImage.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.transform = 'translate(-50%, -50%) scale(1.2)';
                    heart.style.opacity = '0.8';
                }, 50);
                
                setTimeout(() => {
                    heart.style.transform = 'translate(-50%, -50%) scale(0)';
                    heart.style.opacity = '0';
                }, 800);
                
                setTimeout(() => {
                    heart.remove();
                }, 1400);
            }
            tapCount = 0;
        }
    });
});