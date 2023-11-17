import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Link from 'next/link';
// import Audioplay from '../../../public/audio.mp3'

const Countersection = () => {
	
	return(
			<AudioPlayer className='audioplayer'
				src="http://localhost:3001/audio.mp3"
				onPlay={e => console.log("onPlay")}
				customAdditionalControls={[]}
				customVolumeControls={[]}
				customIcons={{
				rewind:<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.97899 13.2817C9.3779 13.5476 9.89081 13.5724 10.3135 13.3462C10.7362 13.12 11.0001 12.6794 11.0001 12.2L11.0001 8.56241L18.079 13.2817C18.4779 13.5476 18.9908 13.5724 19.4135 13.3462C19.8362 13.12 20.1001 12.6794 20.1001 12.2V1.8C20.1001 1.32057 19.8362 0.880049 19.4135 0.653825C18.9908 0.4276 18.4779 0.452395 18.079 0.718337L11.0001 5.4376V1.8C11.0001 1.32057 10.7362 0.88005 10.3135 0.653825C9.89081 0.427601 9.3779 0.452395 8.97899 0.718337L1.17899 5.91834C0.817329 6.15944 0.600098 6.56534 0.600098 7C0.600098 7.43466 0.817329 7.84056 1.17899 8.08167L8.97899 13.2817Z" className='fill-current' fillOpacity="0.26"/>
				</svg>,
				forward:<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.92101 0.718337C2.5221 0.452395 2.00919 0.4276 1.58649 0.653825C1.16378 0.88005 0.899902 1.32057 0.899902 1.8V12.2C0.899902 12.6794 1.16378 13.12 1.58649 13.3462C2.00919 13.5724 2.5221 13.5476 2.92101 13.2817L9.9999 8.56241V12.2C9.9999 12.6794 10.2638 13.12 10.6865 13.3462C11.1092 13.5724 11.6221 13.5476 12.021 13.2817L19.821 8.08167C20.1827 7.84056 20.3999 7.43466 20.3999 7C20.3999 6.56534 20.1827 6.15944 19.821 5.91834L12.021 0.718337C11.6221 0.452395 11.1092 0.4276 10.6865 0.653825C10.2638 0.88005 9.9999 1.32057 9.9999 1.8V5.4376L2.92101 0.718337Z" className='fill-current' fillOpacity="0.26"/>
				</svg>
				
				}}
			/>
	);
}
export default Countersection;