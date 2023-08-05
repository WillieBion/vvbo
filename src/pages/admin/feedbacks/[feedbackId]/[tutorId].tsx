import React, { useEffect } from 'react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const TutorOverview = () => {
  const contextPath = getConfig().publicRuntimeConfig.contextPath;

  return (
    <div>
      <div></div>
    </div>
  )
}

export default TutorOverview
