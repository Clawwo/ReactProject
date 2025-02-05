export default function HelloWorld () {
    const text = {
        header : 'Hello Worlds'
    }
    return (
        <div>
            <Hello {...text}></Hello>
            <WorldParagraf></WorldParagraf>
        </div>
    )
}

function Hello ({header = 'Hello World'}) {
    console.log('Hello terpanggil');
    return (
        <div style={{
            color : 'red',
            backgroundColor : 'blue'
        }}>
            <h1>{header.toUpperCase()}</h1>
        </div>
    )
}

function WorldParagraf () {
    return (
        <div>
            <p>Ini adalah paragraf</p>
        </div>
    )
}