import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, prefix = "", suffix = "", duration = 1500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        // Limpiamos el valor para asegurarnos que es numérico (quita $ y ,)
        const end = parseInt(value.toString().replace(/[^0-9]/g, ""));
        if (start === end) return;

        let totalFrame = 60;
        let timeTotal = duration;
        let timePerFrame = Math.max(Math.floor(timeTotal / totalFrame), 1); // tiempo mínimo
        let increment = (end - start) / totalFrame;

        let timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, timePerFrame);

        return () => clearInterval(timer);
    }, [value, duration]);

    return (
        <span>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

export default AnimatedNumber;