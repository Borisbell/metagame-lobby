export default function PlayButton({img_url}) {
    return (
      <button className='button-play'>
        <img src={img_url}/>
        <h1 className='button-play_text'>Играть</h1>
      </button>
    );
  }