const HeaderLogo = ({logo}) => {
  return (
    <div className="w-20 xl:w-24 bg-white md:bg-transparent rounded-full">
        <img
            src={logo}
            alt="logo"
            className="w-full"
        />
    </div>
  )
}

export default HeaderLogo
