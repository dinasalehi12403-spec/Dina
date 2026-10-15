const btn = document.getElementById('colorBtn');

// آرایه‌ای از رنگ‌های مختلف برای تغییر پس‌زمینه سایت به صورت تصادفی
const colors = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #ff9966, #ff5e62)',
    'linear-gradient(135deg, #00b09b, #96c93d)',
    'linear-gradient(135deg, #f857a6, #ff5858)'
];

btn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});
