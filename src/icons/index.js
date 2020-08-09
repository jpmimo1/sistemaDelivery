import { SvgIcon } from "@material-ui/core";
import React from "react";

const GoogleColores = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <path
        style={{ fill: "#FBBB00" }}
        d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
      />
      <path
        style={{ fill: "#518EF8" }}
        d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
      />
      <path
        style={{ fill: "#28B446" }}
        d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
      />
      <path
        style={{ fill: "#F14336" }}
        d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
      />
    </SvgIcon>
  );
};

const Google = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <path d="m147.682 173.862c24.86-32.704 64.162-53.862 108.318-53.862 36.326 0 70.479 14.146 96.167 39.833l10.606 10.606 84.853-84.852-10.606-10.606c-48.352-48.352-112.639-74.981-181.02-74.981-68.38 0-132.667 26.629-181.02 74.98-4.389 4.39-8.594 8.914-12.622 13.557z" />
      <path d="m423.462 449.642c4.643-4.028 9.168-8.233 13.558-12.622 48.351-48.353 74.98-112.64 74.98-181.02 0-15.575-1.41-31.179-4.192-46.377l-2.251-12.299h-264.557v120h136.452c-9.437 18.773-22.936 34.779-39.199 47.109z" />
      <path d="m311.602 380.208c-17.091 7.623-35.947 11.792-55.602 11.792-44.156 0-83.458-21.158-108.318-53.862l-85.324 85.324c4.028 4.643 8.233 9.168 12.622 13.557 48.353 48.352 112.64 74.981 181.02 74.981 51.916 0 101.464-15.363 143.479-43.915z" />
      <path d="m131.863 311.531c-7.619-16.965-11.863-35.761-11.863-55.531s4.244-38.566 11.863-55.531l-87.948-87.948c-28.552 42.015-43.915 91.563-43.915 143.479s15.363 101.464 43.915 143.479z" />
    </SvgIcon>
  );
};

const Facebook = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0" />
    </SvgIcon>
  );
};

export { GoogleColores, Google, Facebook };