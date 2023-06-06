<script lang="ts">
    let day: number;
    let dayErrorMessage: string;
    let month: number;
    let monthErrorMessage: string;
    let year: number;
    let yearErrorMessage: string;
    let time: number;
    let currentYear: number = new Date().getFullYear();
    let animDay: number;
    let animMonth: number;
    let animYear: number;

    $: finalYear = year < 100 ? Math.floor(time / 365) + 1900 : Math.floor(time / 365);
    $: finalMonth = Math.floor((time % 365) / 30);
    $: finalDay = Math.floor((time % 365) % 30);

    function validateDay() {
      if (!day && day != 0) {
        dayErrorMessage = "This field is required";
        return false;
      } else if (
          (day < 1 || day > 31) ||
          (month == 2 && day > 29) ||
          ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)) {
        dayErrorMessage = "Must be a valid day";
        return false;
      } else {
        dayErrorMessage = "";
        return true;
      }
    }
    function validateMonth() {
      if (!month && month != 0) {
        monthErrorMessage = "This field is required";
        return false;
      } else if (month < 1 || month > 12) {
        monthErrorMessage = "Must be a valid month";
        return false;
      } else {
        validateDay();
        monthErrorMessage = "";
        return true;
      }
    }
    function validateYear() {
      if (!year && year != 0) {
        yearErrorMessage = "This field is required";
        return false;
      } else if (year > currentYear) {
        yearErrorMessage = "Must be a valid year";
        return false;
      } else {
        yearErrorMessage = "";
        return true;
      }
    }
    function validate() {
      let err = false;
      if (!validateDay()) { err = true };
      if (!validateMonth()) { err = true };
      if (!validateYear()) { err = true };
      if (err) {
        return;
      } else {
        if (year < 100) {
          time = (new Date().getTime() - new Date(year, month - 1, day).getTime()) / 86400000;
        } else {
          time = (new Date().getTime() - new Date(year, month - 1, day).getTime()) / 86400000;
        }
        animDay = 0;
        animMonth = 0;
        animYear = 0;
        let timer = setInterval(() => {
          if (animDay < finalDay) {
            animDay++;
          }
          if (animMonth < finalMonth) {
            animMonth++;
          }
          if (animDay == finalDay && animMonth == finalMonth) {
            clearInterval(timer);
          }
        }, 100)
        let yearTimer = setInterval(() => {
          if (animYear < finalYear) {
            animYear += 10;
          } else {
            animYear = finalYear;
            clearInterval(yearTimer);
          }
        }, 30)
      }
    }
</script>

<main class="container">
  <form on:submit|preventDefault={validate}>
    <div>
      <label for="day" class={dayErrorMessage ? 'error' : ''}>DAY</label>
      <input id="day" type="number" name="day" bind:value={day}  placeholder="DD" class={dayErrorMessage ? 'error' : ''} on:input={validateDay}>
      <div class="error-field">
        {#if dayErrorMessage}
          <p class="error">{dayErrorMessage}</p>
        {/if}
      </div>
    </div>
    <div>
      <label for="month" class={monthErrorMessage ? 'error' : ''}>MONTH</label>
      <input id="month" type="number" name="month" bind:value={month} placeholder="MM" class={monthErrorMessage ? 'error' : ''} on:input={validateMonth}>
      <div class="error-field">
        {#if monthErrorMessage}
          <p class="error">{monthErrorMessage}</p>
        {/if}
      </div>
    </div>
    <div>
      <label for="year" class={yearErrorMessage ? 'error' : ''}>YEAR</label>
      <input id="year" type="number" name="year" bind:value={year} placeholder="YYYY" class={yearErrorMessage ? 'error' : ''} on:input={validateYear}>
      <div class="error-field">
        {#if yearErrorMessage}
          <p class="error">{yearErrorMessage}</p>
        {/if}
      </div>
    </div>
    <button type="submit">
      <img src="/assets/images/icon-arrow.svg" alt="arrow">
    </button>
  </form>
  <div class="results-container">
    <p>{animYear >= 0 ? animYear : '--'}<span>years</span></p>
    <p>{animMonth >= 0 ? animMonth : '--'}<span>months</span></p>
    <p>{animDay >= 0 ? animDay : '--'}<span>days</span></p>
  </div>
</main>
<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="https://www.arthurnespoulous.com" target="_blank">AN</a>.
</div>

<style lang="scss">
  main {
    width: 680px;
    background: #fff;
    padding: 40px;
    border-radius: 20px 20px 160px 20px;
    
    form {
      position: relative;
      display: flex;
      gap: 26px;
      border-bottom: 3px solid $offWhite;
      padding: 5px 0 20px 0;

      label.error {
        color: $red;
      }
      input.error {
        border: 1px solid $red;
      }
      .error-field {
        padding-top: 5px;
        height: 20px;

        p.error {
          color: $red;
          font-weight: 400;
          font-style: italic;
          font-size: 0.35rem;
          margin: 0;
          line-height: 1.2;
        }
      }

      label {
        display: block
      }

      button {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateY(50%);
      }
    }
    .results-container {
      margin-top: 40px;
      p {
        font-size: 3rem;
        color: $purple;
        margin: 0;
        font-weight: 800;
        font-style: italic;
        line-height: 1.2;

        span {
          color: $offBlack;
          margin-left: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    main {
      width: 90%;
      padding: 20px 20px 60px 20px;

      form {
        justify-content: space-between;
        padding-bottom: 40px;
        gap: 5px;

        input {
          width: 94px;
          height: 50px;
          font-size: 0.6rem;
        }
        .error-field {
          height: 30px;
        }

        button {
          width: 60px;
          height: 60px;
          left: 50%;
          transform: translate(-50%, 50%);
        }
      }

      .results-container {
        margin-top: 60px;
        p {
          font-size: 1.7rem;
        }
      }
    }
  }
</style>