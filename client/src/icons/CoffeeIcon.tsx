import { useTheme } from "../components/useTheme";

const CoffeeIcon = () => {
    const {theme} = useTheme();
    return (
      <>
        <svg
          fill={theme === "dark" ? "#ffff" : "#000000"}
          width={30}
          height={30}
          viewBox='0 0 50 50'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M15.427734 3C14.062745 3 12.859456 3.9323872 12.521484 5.2558594L12.074219 7L12 7C11.133553 7 10.343298 7.2932543 9.7636719 7.7890625C9.1840453 8.2848707 8.8153921 8.9380401 8.5664062 9.625C8.0684347 10.99892 8 12.57785 8 14 A 1.0001 1.0001 0 0 0 9 15L10.119141 15L13.970703 45.017578 A 1.0001 1.0001 0 0 0 13.974609 45.042969C14.160517 46.237774 15.204427 47 16.367188 47L33.630859 47C34.794193 47 35.83786 46.235688 36.023438 45.042969 A 1.0001 1.0001 0 0 0 36.027344 45.017578L39.880859 15L41 15 A 1.0001 1.0001 0 0 0 42 14C42 12.57785 41.931565 10.99892 41.433594 9.625C41.184608 8.9380401 40.815955 8.2848707 40.236328 7.7890625C39.656702 7.2932543 38.866447 7 38 7L37.90625 7L37.474609 5.2734375 A 1.0001 1.0001 0 0 0 37.474609 5.2714844C37.141393 3.9416023 35.934385 3 34.5625 3L15.427734 3 z M 15.427734 5L34.5625 5C35.026615 5 35.42042 5.3076915 35.533203 5.7578125L35.84375 7L14.138672 7L14.458984 5.7519531C14.573013 5.3054253 14.966724 5 15.427734 5 z M 12.912109 8.9960938 A 1.0001 1.0001 0 0 0 13 9L37 9 A 1.0001 1.0001 0 0 0 37.064453 8.9980469 A 1.0001 1.0001 0 0 0 37.125 9L38 9C38.459053 9 38.706095 9.1106518 38.9375 9.3085938C39.168905 9.5065356 39.385047 9.8386001 39.554688 10.306641C39.802098 10.989256 39.830025 12.022136 39.878906 13L11.166016 13 A 1.0001 1.0001 0 0 0 10.955078 12.986328 A 1.0001 1.0001 0 0 0 10.835938 13L10.121094 13C10.169974 12.022136 10.197905 10.989256 10.445312 10.306641C10.614953 9.8386001 10.831095 9.5065355 11.0625 9.3085938C11.293905 9.1106518 11.540947 9 12 9L12.849609 9 A 1.0001 1.0001 0 0 0 12.912109 8.9960938 z M 12.136719 15L37.863281 15L36.708984 24L31.984375 24C30.659565 21.085293 28.095496 19.012008 24.992188 19.003906C24.945978 19.002306 24.902818 19.004791 24.857422 19.007812C21.786193 19.059813 19.278095 21.123031 17.988281 24L13.291016 24L12.136719 15 z M 24.945312 20.998047C24.966323 20.999147 24.947809 21 24.974609 21C27.392834 21 29.474358 22.682557 30.451172 25.34375 A 1.0001 1.0001 0 0 0 31.388672 26L31.490234 26L36.451172 26L35.810547 31L31.527344 31L31.388672 31 A 1.0001 1.0001 0 0 0 30.447266 31.660156C30.227471 32.270178 29.97672 32.828834 29.671875 33.296875C28.538498 35.034193 26.884731 35.976012 25.087891 35.998047L25.021484 35.998047C23.246013 35.998047 21.592289 35.09639 20.431641 33.398438 A 1.0001 1.0001 0 0 0 20.431641 33.396484C20.091871 32.900328 19.8123 32.306572 19.574219 31.65625 A 1.0001 1.0001 0 0 0 18.634766 31L18.521484 31L14.189453 31L13.548828 26L18.484375 26L18.589844 26 A 1.0001 1.0001 0 0 0 19.529297 25.339844C20.477663 22.708373 22.511851 21.026828 24.917969 21 A 1.0001 1.0001 0 0 0 24.945312 20.998047 z M 24.939453 23C23.705063 23.01347 22.665152 23.777929 22.001953 24.794922C21.338753 25.811913 20.978618 27.119966 20.994141 28.542969C21.009661 29.965972 21.398756 31.267249 22.083984 32.269531C22.769211 33.271814 23.826157 34.013466 25.060547 34C26.294937 33.98654 27.334848 33.22207 27.998047 32.205078C28.661247 31.188086 29.021382 29.880035 29.005859 28.457031C28.990339 27.034028 28.601244 25.732752 27.916016 24.730469C27.230789 23.728186 26.173843 22.986534 24.939453 23 z M 24.960938 25C25.386064 24.9954 25.843602 25.244939 26.263672 25.859375C26.683742 26.473812 26.994273 27.416385 27.005859 28.478516C27.017449 29.540646 26.728831 30.489827 26.322266 31.113281C25.915699 31.736734 25.464189 31.995363 25.039062 32C24.613936 32.0046 24.156399 31.755062 23.736328 31.140625C23.316259 30.526189 23.005727 29.583615 22.994141 28.521484C22.982551 27.459353 23.271169 26.510173 23.677734 25.886719C24.084301 25.263265 24.535811 25.004637 24.960938 25 z M 14.445312 33L18.021484 33C18.24578 33.51991 18.454188 34.047503 18.78125 34.525391C20.264602 36.695438 22.552956 37.998047 25.021484 37.998047L25.091797 37.998047 A 1.0001 1.0001 0 0 0 25.101562 37.998047C27.60154 37.971307 29.89481 36.614655 31.345703 34.390625 A 1.0001 1.0001 0 0 0 31.347656 34.390625C31.635588 33.948746 31.81459 33.471059 32.013672 33L35.554688 33L34.048828 44.736328C34.042405 44.777609 33.827526 45 33.630859 45L16.367188 45C16.173946 45 15.95727 44.775524 15.951172 44.736328L14.445312 33 z' />
        </svg>
      </>
    );
}

export default CoffeeIcon;