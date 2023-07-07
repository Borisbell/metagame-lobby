export default function SecondaryButton({toggle, img_url, img_url2, toggleFunction}) {
    return (
      <button className='button-secondary' onClick={toggleFunction}>
        <img src={toggle? img_url : img_url2}/>
      </button>
    );
  }