document.addEventListener("DOMContentLoaded", function() {
    const uploadPhotoInput = document.getElementById("upload-photo");
    const tryOnButton = document.getElementById("try-on");
    const modelElement = document.getElementById("model");
    const clothElement = document.getElementById("cloth");

    // uploadPhotoInput.addEventListener("change", function(event) {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = function(e) {
    //         photoImg.src = e.target.result;
    //     }
    //     reader.readAsDataURL(file);
    // });

    tryOnButton.addEventListener("click", async function() {
        // const file = uploadPhotoInput.files[0];
        // const formData = new FormData();
        // formData.append("image", file);

        const model = modelElement.value;
        const cloth = clothElement.value;

        if (! (model || cloth)) {
            alert("Пожалуйста, выберите модель и одежду!");
            return;
        }

        try {
            const response = await fetch('https://example.com?' + new URLSearchParams({
                model: model,
                cloth: cloth,
                category: "upperbody"
            }))
            const data = await response.json();
            // Обработка ответа от API и отображение результата
            console.log(data);
        } catch (error) {
            console.error("Ошибка при отправке запроса:", error);
        }
    });
});
