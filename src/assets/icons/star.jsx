const star = (isActive) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.114"
      height="37.356"
      viewBox="0 0 39.114 37.356"
    >
      <path
        id="Path_64"
        data-name="Path 64"
        d="M221.882,386.851l-8.548,8.33,2.026,11.773c.208,1.431-.672,2.069-1.881,1.363l-10.574-5.555-10.569,5.555c-1.354.725-2.069.01-1.881-1.363l2.026-11.773-8.572-8.33c-.952-1.035-.759-1.973.73-2.21l11.816-1.721,5.3-10.709c.6-1.281,1.7-1.281,2.306,0l5.3,10.709,11.816,1.721C222.516,384.864,222.854,385.879,221.882,386.851Z"
        transform="translate(-183.326 -371.25)"
        fill={isActive?"#006d77":"#E5E4E9"}
      />
    </svg>
  );
};
export default star;
