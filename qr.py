import qrcode

lien = "https://soutien.habitat-humanisme.org/"

qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=4,
)
qr.add_data(lien)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("qrcode_don.png")