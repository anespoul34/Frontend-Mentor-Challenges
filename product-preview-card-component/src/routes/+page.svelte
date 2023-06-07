<script lang="ts">
</script>

<main>
  <div class="left">
    <img class="desktop-img" src="./assets/images/image-product-desktop.jpg" alt="perfume" />
    <img class="mobile-img" src="./assets/images/image-product-mobile.jpg" alt="perfume" />
  </div>
  <div class="right">
    <span class="head">PERFUME</span>
    <h1>Gabrielle Essence Eau De Parfum</h1>
    <p class="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
    <div class="price-container">
      <h2>$149.99</h2>
      <span>$169.99</span>
    </div>
    <button class="add-to-cart-btn">
      <img src="./assets/images/icon-cart.svg" alt="cart-icon">
      <span>Add to cart</span>
    </button>
  </div>
</main>
<footer class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="https://www.arthurnespoulous.com" target="_blank">AN</a>.
</footer>

<style lang="scss">
  main {
    display: flex;
    width: 760px;
    height: 570px;
    border-radius: 10px;
    background-color: $white;
    overflow: hidden;
    border-radius: 10px;

    .left {
      width: 50%;
      .desktop-img {
        width: 100%;
        display: block;
      }
      .mobile-img {
        display: none;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 50%;
      padding: 50px;
      gap: 10px;

      .head {
        letter-spacing: 7px;
      }
      .description {
        font-size: 1.2rem;
        line-height: 1.6;
      }

      .price-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 30px;
        span {
          font-size: 1.1rem;
          text-decoration: line-through;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    main {
      width: 360px;
      height: 90%;
      min-height: 625px;
      flex-direction: column;

      .left {
        width: 100%;
        .desktop-img {
          display: none;
        }
        .mobile-img {
          display: block;
          width: 100%;
        }
      }
      .right {
        width: 100%;
        padding: 20px;
        flex: 1 0 auto;

        h1 {
          font-size: 2.2rem;
        }
        h2 {
          font-size: 2.1rem;
        }
        .description {
          font-size: 1.1rem;
          line-height: 1.5;
        }
      }
    }
  }
</style>