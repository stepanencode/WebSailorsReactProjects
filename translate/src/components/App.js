import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from "./LanguageSelector";


class App extends React.Component {

    render() {
        return (
            <div className='ui container'>

                {/*<LanguageContext.Provider value={this.state.language}>*/}
                {/*    <UserCreate />*/}
                {/*</LanguageContext.Provider>*/}
                {/*<LanguageSelector onLanguageChange={this.onLanguageChange}/>*/}
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>

                {/*    <ColorContext.Provider value="red">*/}
                {/*    <LanguageContext.Provider value={this.state.language}>*/}
                {/*        <UserCreate />*/}
                {/*    </LanguageContext.Provider>*/}
                {/*</ColorContext.Provider>*/}
            </div>
        );
    }
}

export default App;