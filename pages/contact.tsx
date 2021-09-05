//Cannot return number, must be react component
//js functions handlers aren't injected into html element but as script

//Styled JSX is scoped to component level (not global css style [we must use global prop to assign]), we can use JS variables to style
export default function Contact() {
    return (
        <div>
            <h2 className='title' onClick={() => alert('I am contact')}>Contact number: 123-456-789</h2>
            <style jsx>
            {`
                .title {
                    color: red;
                }
            `}
            </style>
        </div>
    )
}
