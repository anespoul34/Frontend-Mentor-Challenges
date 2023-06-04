<script>
  import datas from '../data.json';
</script>

<main>
  <div class="left">
    <p>Your Result</p>
    <div class="score-container">
      <h1>76</h1>
      <span>of 100</span>
    </div>
    <h2>Great</h2>
    <span>You scored higher than 65% of the people who have taken these tests.</span>
  </div>
  <div class="right">
    <h3>Summary</h3>
    <div class="skills-wrapper">
      {#each datas as data}
        <div class="skill-container">
          <img src="{data.icon}" alt="icon"/>
          <span class="category">{data.category}</span>
          <span><b>{data.score} </b> / 100</span>
        </div>
      {/each}
    </div>
    <button>Continue</button>
  </div>
</main>
<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="https://www.arthurnespoulous.com" target="_blank">AN</a>.
</div>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--fc-light);

    .left {
      width: 100%;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(hsl(252, 100%, 67%) 0%, hsl(241, 81%, 54%) 75%);
      border-radius: 0 0 25px 25px;
      text-align: center;
      padding: 10px 60px 30px;

      p, h1, h2, span {
        color: var(--fc-light);
      }

      p {
        font-size: 1rem;
        color: hsla(241, 100%, 89%, 1);
      }
      h2 {
        font-size: 1.3rem;
        margin: 20px 0 10px;
      }
      span {
        font-size: 0.8rem;
        color: hsla(241, 100%, 89%, 0.9);  
      }

      .score-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(hsla(256, 72%, 46%, 1) 0%, hsla(241, 72%, 46%, 0) 100%);
        width: 140px;
        height: 140px;
        border-radius: 50%;

        h1 {
          font-size: 3rem;
          font-weight: 800;
          margin: 0;
        }
        span {
          font-size: 0.8rem;
          color: hsla(241, 100%, 89%, 0.5);
        }
      }
    }

    .right {
      width: 100%;
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 30px 30px;
      gap: 18px;

      h3 {
        font-size: 1.1rem;
        color: var(--fc-tertiary);
        font-weight: 800;
        margin: 0;
      }

      .skills-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 auto;
        gap: 24px;

        .skill-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px;
          height: 52px;
          border-radius: 12px;

          img {
            margin-right: 10px;
          }
          .category {
            flex: 1 0 auto;
            text-align: left;
            font-weight: 800;
          }
          span {
            color: hsla(224, 30%, 27%, 0.5);
            font-size: 1rem;
          }
          b {
            color: var(--fc-tertiary);
            font-size: 1rem;
            font-weight: 700;
          }
        }
        .skill-container:nth-child(1) {
          background: hsla(0, 100%, 67%, 0.1);
          .category {
            color: hsl(0, 100%, 67%);
            font-size: 1rem;
          }
        }
        .skill-container:nth-child(2) {
          background: hsla(39, 100%, 56%, 0.1);
          .category {
            color: hsl(39, 100%, 56%);
            font-size: 1rem;
          }
        }
        .skill-container:nth-child(3) {
          background: hsla(166, 100%, 37%, 0.1);
          .category {
            color: hsl(166, 100%, 37%);
            font-size: 1rem;
          }
        }
        .skill-container:nth-child(4) {
          background: hsla(234, 85%, 45%, 0.1);
          .category {
            color: hsl(234, 85%, 45%);
            font-size: 1rem;
          }
        }
      }

      button {
        cursor: pointer;
        width: 100%;
        height: 52px;
        border-radius: 30px;
        background: var(--fc-tertiary);
        color: var(--fc-light);
        font-weight: 700;
        border: none;
        font-size: 1rem;
      }
      button:hover {
        background: linear-gradient(hsl(252, 100%, 67%) 0%, hsl(241, 81%, 54%) 75%);
      }
    }
  }

  @media only screen and (min-width: 481px) {

  }

  @media only screen and (min-width: 769px) {
    main {
      flex-direction: row;
      max-width: 660px;
      height: 464px;
      border-radius: 25px;
      box-shadow: 5px 5px 20px -10px hsla(0, 100%, 67%, 0.1);

      .left, .right {
        width: 50%;
        height: 100%;
      }
      .left {
        border-radius: 25px;
        gap: 20px;
      }
      .right {
        .skills-wrapper {
          gap: 16px;
        }
      }
    }
  }
</style>