//Cannot return number, must be react component
//js functions handlers aren't injected into html element but as script
export default function Contact() {
    return (
        <h2 onClick={() => alert('I am contact')}>Contact number: 123-456-789</h2>
    )
}
