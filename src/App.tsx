import './App.css'
import {useWhisper} from "./vendor/use-whisper-main/src";
import {API_KEY} from "./config.ts";

function App() {
    const {startRecording, stopRecording, recording, transcript} = useWhisper({
        apiKey: API_KEY,
        autoTranscribe: true,
        whisperConfig: {
            language: 'pl',
        },
        removeSilence: true,
    });

    return (
        <>
            <h1>{recording ? '🔴' : '⏸️'}</h1>
            <p>{transcript?.text ?? ''}</p>
            <button onClick={startRecording}>Start</button>
            <button onClick={stopRecording}>Stop</button>
        </>
    )
}

export default App
