(function () {
    const labelText = "掃描 QR 碼";
    let container = document.querySelector('.qr-container');

    if (!container) {
        container = document.createElement('div');
        container.className = 'qr-container';
        const label = document.createElement('p');
        label.textContent = labelText;
        const qrBox = document.createElement('div');
        qrBox.id = 'qrcode';
        container.appendChild(label);
        container.appendChild(qrBox);
        document.body.insertBefore(container, document.body.firstChild);
    }

    const qrContainer = container.querySelector('#qrcode');
    if (!qrContainer) {
        return;
    }

    const currentUrl = window.location.href;
    const qrImage = document.createElement('img');
    const qrData = currentUrl.startsWith('file://') ? currentUrl : currentUrl;

    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(qrData);
    qrImage.alt = 'QR Code';
    qrImage.style.display = 'block';
    qrImage.style.margin = '0 auto';
    qrImage.onerror = function () {
        console.error('QR 碼圖片載入失敗');
        qrContainer.innerHTML = '<p style="color: #808080; font-size: 11px;">QR 碼載入失敗<br>請檢查網路連線</p>';
    };

    qrContainer.appendChild(qrImage);
    console.log('QR 碼 URL:', currentUrl);
})();
