const paths = {
  root: "/",
  auth: "/auth",
  login: "/auth/login",
  register: "/auth/register",
  verifynEmail: "/auth/verify/email",
  registerBusiness: "/business/register"
};

const getProfileColor = () => {
  const profilesColor = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722"
  ];
  let numberColors = profilesColor.length;
  let randomIndex = Math.floor(Math.random() * numberColors);
  return profilesColor[randomIndex];
};

export { paths, getProfileColor };
