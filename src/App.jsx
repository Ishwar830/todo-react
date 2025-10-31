import { useImmerReducer } from 'use-immer';
import dummyData from './utils/dummyDataGenerator';
import SidePanel from './components/SidePanel';
import MainPanel from './components/MainPanel';
import appStateReducer from './utils/appStateReducer';
import { AppStateContext, DispatchContext } from './components/Contexts';

const initialAppState = {
   categoryList: dummyData,
   currentCategoryID: dummyData[0].uid,
   currentTaskID: null,
};


function App() {
   const [appState, dispatch] = useImmerReducer(
      appStateReducer,
      initialAppState
   );
   
   return (
      <div className="relative grid grid-cols-[250px_1fr_300px]">
         <AppStateContext value={appState}>
            <DispatchContext value={dispatch}>
               <SidePanel></SidePanel>
               <MainPanel></MainPanel>
            </DispatchContext>
         </AppStateContext>
      </div>
   );
}

export default App;
