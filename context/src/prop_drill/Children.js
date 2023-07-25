import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';

import { FamilyContext } from '../ContextComponents/FamilyContext';

import { useContext } from 'react';

const Children = () => {

   let childrenInfo = useContext(FamilyContext)
  
  return (
    <div className="children">
      <h2>{`Children ${childrenInfo.familyName}`}</h2>

      


      {/* <GrandSon grandSonInfo={childrenInfo}/>
      <GrandDaughter grandDaughterInfo={childrenInfo}/> */}
     
    </div>
  );
}

export default Children;