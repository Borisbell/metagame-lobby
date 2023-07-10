export default function Button({img_url}) {
    return (
        <button className='button-style'>
            <img className='big-button_icon'src={img_url}/>
        </button>
    );
  }