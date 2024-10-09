document.addEventListener('DOMContentLoaded', () => {
    // Giỏ hàng
    let cart = [];
    let loggedInUser = null; // Lưu thông tin người dùng đã đăng nhập

    // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(productName, price) {
        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity += 1;
        } else {
            cart.push({ name: productName, price: price, quantity: 1 });
        }
        updateCart();
    }

    // Cập nhật giỏ hàng trong giao diện
    function updateCart() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalPriceElement = document.getElementById('totalPrice');
        cartItemsContainer.innerHTML = '';

        let totalPrice = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.name} - Giá: ${item.price} VND x ${item.quantity}`;
            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN');
    }

    // Xử lý sự kiện thêm sản phẩm vào giỏ hàng
    window.addToCart = addToCart;

    // Cập nhật giao diện sau khi đăng nhập
    function updateUIAfterLogin() {
        const loginSection = document.querySelector('.Sign_up');
        const accountInfo = document.getElementById('accountInfo');

        if (loggedInUser) {
            loginSection.style.display = 'none'; // Ẩn form đăng nhập
            accountInfo.style.display = 'block'; // Hiển thị thông tin người dùng
            accountInfo.textContent = `Xin chào, ${loggedInUser}`;
        } else {
            loginSection.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    // Đăng ký form đăng nhập
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Giả lập xử lý đăng nhập
        loggedInUser = email;
        alert(`Đăng nhập thành công! Email: ${email}`);
        
        // Chuyển hướng đến trang chủ và cập nhật giao diện sau khi đăng nhập thành công
        window.location.href = '#home';
        updateUIAfterLogin();
    });

    // Đăng ký form đăng ký
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Giả lập xử lý đăng ký
        alert(`Đăng ký thành công! Email: ${email}`);
        
        // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
        window.location.href = '#Sign_up';
    });

    // Xử lý form liên hệ
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        // Giả lập gửi tin nhắn
        alert(`Cảm ơn bạn ${name} đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi qua email: ${email}`);
        
        // Hiển thị phản hồi
        document.getElementById('contactFeedback').classList.remove('hidden');
    });

    // Khởi tạo giao diện sau khi tải trang
    updateUIAfterLogin();
});
