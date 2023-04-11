import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';


function FAQ  () {
    return (
      <div className="FAQ-sec">
        <Container className="text-white justify-content-center">
          <h2 className="text-center pt-5">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0" className="pt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Nepflix</Accordion.Header>
              <Accordion.Body>
                <p>Nepflix is a popular streaming service that offers a wide range of TV shows, movies, documentaries, and other types of video content to its subscribers. Founded in 1997 in California, Nepflix originally started as a DVD rental-by-mail service before transitioning into a streaming service in 2007. Today, Netflix has over 200 million subscribers in more than 190 countries, making it one of the most popular streaming platforms in the world. Netflix produces its own original content, such as the hit series Stranger Things, The Crown, and Narcos, and also offers a wide range of licensed content from other studios and networks.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How much is Nepflix</Accordion.Header>
              <Accordion.Body>
                <h3>Pricing (Philippine Peso)</h3>
                  <ul>
                    <li>Mobile: 149 PHP / month</li>
                    <li>Basic: 249 PHP / month</li>
                    <li>Standard: 399 PHP / month</li>
                    <li>Premium: 549 PHP / month</li>
                  </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Where can I watch?</Accordion.Header>
              <Accordion.Body>
                <h3>You can watch Nepflix on a variety of devices, including:</h3>
                  <ul>
                    <li>Smart TVs: Most modern smart TVs come with a built-in Nepflix app that you can access and stream content directly on your TV.</li>
                    <li>Streaming devices: You can also watch Netflix on devices such as Apple TV, Roku, Chromecast, and Amazon Fire TV Stick.</li>
                    <li>Game consoles: If you have a PlayStation, Xbox, or Nintendo Switch, you can download the Nepflix app and watch content on your gaming console.</li>
                    <li>Computers: You can watch Netflix on your desktop or laptop computer by visiting the Nepflix website.</li>
                    <li>Mobile devices: Netflix has apps for iOS and Android devices that allow you to watch content on your smartphone or tablet.</li>
                  </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>


    )
  }
  
  export default FAQ