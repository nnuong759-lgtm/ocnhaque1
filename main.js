      function filterMenu() {
        // 1. Lấy giá trị đang chọn trong dropdown
        const selector = document.getElementById("menu-filter");
        const selectedCategory = selector.value;

        // 2. Lấy danh sách tất cả món ăn
        const items = document.querySelectorAll(".menu-item");

        // 3. Duyệt qua từng món để kiểm tra
        items.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");

          if (selectedCategory === "all" || itemCategory === selectedCategory) {
            // Nếu chọn 'all' hoặc đúng loại -> Hiện
            item.classList.remove("hidden");
            item.classList.add("show");
          } else {
            // Nếu không đúng loại -> Ẩn
            item.classList.remove("show");
            item.classList.add("hidden");
          }
        });
      }