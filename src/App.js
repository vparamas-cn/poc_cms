import './App.css';
import React from 'react';
import { client } from './client';
import Header from './components/Header'
import Footer from './components/Footer'
import PriceList from './components/PriceList'
import Typographic from './components/Typographic'

class App extends React.Component {
  state = {
    landingPage: false
  }

  componentDidMount() {
    client.getEntries({ content_type: 'landingPage', include: 10, })
      .then((response) => {
        console.log(response)
        this.setState({
          landingPage: response.items
        })
      })
      .catch(console.error)
  }
  render() {
    const { landingPage } = this.state;
    return (
      <div className="App">
        <div className="container">
          {landingPage && <Header header={landingPage[0].fields.header.fields} />}
          <main>
            <div className='wrapper'>
              {
                landingPage && landingPage[0].fields.component.map((item,index)=>{
                    if(item.sys.contentType.sys.id == "typography"){
                      return <Typographic key={"component"+index} typo={item} />
                    }
                    else if(item.sys.contentType.sys.id == "pricingList"){
                      return <PriceList  key={"component"+index} pricelist={item} />
                    }
                })
              }
            </div>
          </main>
          {landingPage && <Footer footer={landingPage[0].fields.component.filter((item) => {
            return item.sys.contentType.sys.id == "footer"
          })} />}
        </div>
      </div>
    )

  }

}

export default App;
