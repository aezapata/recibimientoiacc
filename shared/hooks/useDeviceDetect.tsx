import { useEffect, useState } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState<boolean>();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile/i),
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}