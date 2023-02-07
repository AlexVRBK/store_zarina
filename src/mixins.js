export const myMixin = {
    computed: {
        toFix(value) {
            value = parseFloat(value);
            return value.toFixed(2) + ' ₽'
          },
          formattedPrice(value) {
            let parts = value.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return parts.join(".");
          }
    }
}