export default function SecondaryButton({img_url}) {
    return (
      <button className='button-secondary'>
        <img src={img_url}/>
      </button>
    );
  }