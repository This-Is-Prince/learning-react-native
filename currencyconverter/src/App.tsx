import React from 'react';

import {SafeAreaView} from 'react-native';
import CurrencyButton from './components/CurrencyButton';
import {currencyByRupee} from './constants';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {currencyByRupee.map(item => {
        return (
          <CurrencyButton key={item.name} flag={item.flag} name={item.name} />
        );
      })}
    </SafeAreaView>
  );
}

export default App;
