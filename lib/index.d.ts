declare const OrientationChange: {
    addEventListener: (callback?: (orientation: 'landscape' | 'portrait') => void) => void;
    destroy: () => void;
};
export default OrientationChange;
