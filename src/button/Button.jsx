export default function Button({img_url}) {
    return (
        <button className='button-style'>
            <img src={img_url}/>
        </button>
    );
  }