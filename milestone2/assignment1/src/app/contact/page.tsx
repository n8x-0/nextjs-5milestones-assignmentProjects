const Page3 = () => {
  return (
    <div className="container">
      <form>
        <legend className="shd">Contact Us</legend>
        <div className="namePhoneInpCont">
          <input type="text" placeholder="Your name"/>
          <input type="email" placeholder="Email"/>
        </div>
        <input type="text" placeholder="Your subject"/>
        <textarea rows={5} placeholder="Your message"></textarea>
        <button className='button'>sumbit</button>
      </form>
    </div>
  )
}

export default Page3