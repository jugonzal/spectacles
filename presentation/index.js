// Import React
import React from "react";
import Typist from "react-typist";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme();

const cursor = { show: false, blink: true, element: "|", hideWhenDone: false, hideWhenDoneDelay: 1000 };

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade", "slide"]} transitionDuration={750} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            > journey = start.getTime()
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            564,210,000,000
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>First PC</Quote>
            <Cite>CIRCA 1988</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="primary">
          <Heading size={ 4 } textColor="secondary">MS-DOS years</Heading>
          <Terminal title="juan@lighthouselabs.ca: ~(zsh)" output={[
            <Typist cursor={cursor}>
              <div>BASIC</div>
              <div>dBase III+</div>
              <div>Clipper</div>
              <div>Pascal</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>First Software Dev role</Quote>
            <Cite>CIRCA 1992</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="primary">
          <Heading size={ 4 } textColor="secondary">UNIX years</Heading>
          <Terminal title="juan@lighthouselabs.ca: ~(zsh)" output={[
            <Typist cursor={cursor}>
              <div style={{ color: "#33B969"}}>C, LISP</div>
              <div style={{ color: "#33B969"}}>curses / sockets</div>
              <div style={{ color: "#33B969"}}>lex / yacc</div>
              <div style={{ color: "#33B969"}}>PSQL</div>
              <div style={{ color: "#33B969"}}>Postscript</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>First Web Browser</Quote>
            <Cite>CIRCA 1994</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="primary">
          <Heading size={ 4 } textColor="secondary">Windows years</Heading>
          <Terminal title="juan@lighthouselabs.ca: ~(zsh)" output={[
            <Typist cursor={cursor}>
              <div style={{ color: "white", background: "blue"}}>Visual Basic</div>
              <div style={{ color: "white", background: "blue"}}>MS SQL Server</div>
              <div style={{ color: "white", background: "blue"}}>VB for Applications</div>
              <div style={{ color: "white", background: "blue"}}>Crystal Reports</div>
              <div style={{ color: "white", background: "blue"}}>SourceSafe</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>First Web Project</Quote>
            <Cite>CIRCA 1998</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="primary">
          <Heading size={ 4 } textColor="secondary">Web 1.0 years</Heading>
          <Terminal title="juan@lighthouselabs.ca: ~(zsh)" output={[
            <Typist cursor={cursor}>
              <div style={{ color: "black", background: "white"}}>NetDynamics</div>
              <div style={{ color: "black", background: "white"}}>WebObjects</div>
              <div style={{ color: "black", background: "white"}}>HTML</div>
              <div style={{ color: "black", background: "white"}}>c - cgi-bin</div>
              <div style={{ color: "black", background: "white"}}>Python</div>
              <div style={{ color: "black", background: "white"}}>Microsoft COM</div>
              <div style={{ color: "black", background: "white"}}>PERL</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>First Web Architecture</Quote>
            <Cite>CIRCA 2002</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="primary">
          <Heading size={ 4 } textColor="secondary">Web Architect years</Heading>
          <Terminal title="juan@lighthouselabs.ca: ~(zsh)" output={[
            <Typist cursor={cursor}>
              <div style={{ color: "#33B969"}}>Linux</div>
              <div style={{ color: "#33B969"}}>Java</div>
              <div style={{ color: "#33B969"}}>Java EE</div>
              <div style={{ color: "#33B969"}}>JBoss / Tomcat</div>
              <div style={{ color: "#33B969"}}>Subversion</div>
            </Typist>]}
          />
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>First Startup</Quote>
            <Cite>CIRCA 2006</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="primary">
          <Heading size={ 4 } textColor="secondary">Web 2.0 years</Heading>
          <Terminal title="juan@lighthouselabs.ca: ~(zsh)" output={[
            <Typist cursor={cursor}>
              <div style={{ color: "white", background: "black"}}>MS .NET</div>
              <div style={{ color: "white", background: "black"}}>Javascript</div>
              <div style={{ color: "white", background: "black"}}>MS SQL Server</div>
              <div style={{ color: "white", background: "black"}}>PHP - Wordpress</div>
              <div style={{ color: "white", background: "black"}}>mysql</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>First Company</Quote>
            <Cite>CIRCA 2012</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="primary">
          <Heading size={ 4 } textColor="secondary">Founder years</Heading>
          <Terminal title="juan@lighthouselabs.ca: ~(zsh)" output={[
            <Typist cursor={cursor}>
              <div style={{ color: "white", background: "black"}}>More javascript</div>
              <div style={{ color: "white", background: "black"}}>CSS</div>
              <div style={{ color: "white", background: "black"}}>Amazon Web Services</div>
              <div style={{ color: "white", background: "black"}}>Node.JS</div>
              <div style={{ color: "white", background: "black"}}>MongoDB</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">Some lessons</Heading>
          <List>
            <ListItem>Always be learning</ListItem>
            <ListItem>See the Big Picture</ListItem>
            <ListItem>Everything you learn will be useful... eventually</ListItem>
            <ListItem>This is it. The Journey</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thanks!</Quote>
            <Cite>Juan Gonzalez @globalculture</Cite>
          </BlockQuote>
        </Slide>

      </Deck>
    );
  }
}
