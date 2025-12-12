
$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 10) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });
    
//menu hamburguesa
    $('#hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });
    $('.nav-link').on('click', function() {
        $('#hamburger').removeClass('active');
        $('#navMenu').removeClass('active');
    });
    
    $('.gallery-item').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.1)');
            $(this).find('.gallery-overlay').fadeIn(300);
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
            $(this).find('.gallery-overlay').fadeOut(300);
        }
    );


    
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    



    function checkVisibility() {
        $('.activity-card, .weather-card, .hurricane-card, .hurricane-single-grid, .hurricane-photo, .hurricane-text').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }
    
    $(window).on('scroll', checkVisibility);
    checkVisibility(); 
    


    if ($('#hurricaneChart').length) {
        var ctx = document.getElementById('hurricaneChart').getContext('2d');
        
        var hurricaneChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [
                    {
                        label: 'Huracanes que afectaron Jamaica',
                        data: [2, 1, 3, 2, 4, 2, 1],
                        backgroundColor: '#009B3A',
                        borderColor: '#007a2e',
                        borderWidth: 2,
                        borderRadius: 8
                    },
                    {
                        label: 'Tormentas tropicales',
                        data: [5, 4, 6, 5, 7, 4, 3],
                        backgroundColor: '#FED100',
                        borderColor: '#d4af00',
                        borderWidth: 2,
                        borderRadius: 8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Josefin Sans',
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Historial de Huracanes y Tormentas en Jamaica',
                        font: {
                            family: 'Josefin Sans',
                            size: 18,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: 'Josefin Sans'
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Josefin Sans'
                            }
                        }
                    }
                }
            }
        });
    }
    


    $('.carousel-track').hover(
        function() {
            $(this).css('animation-play-state', 'paused');
        },
        function() {
            $(this).css('animation-play-state', 'running');
        }
    );
    
 


    $('.carousel-item').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
});
