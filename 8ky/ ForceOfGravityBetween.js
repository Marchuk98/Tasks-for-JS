solution = (arr_val, arr_unit) => {
    const G = 6.67e-11;

    const massConvert = {
        'kg': 1,
        'g': 1e-3,
        'mg': 1e-6,
        'μg': 1e-9,
        'lb': 0.453592
    };

    const distanceConvert = {
        'm': 1,
        'cm': 1e-2,
        'mm': 1e-3,
        'μm': 1e-6,
        'ft': 0.3048
    };

    const m1 = arr_val[0] * massConvert[arr_unit[0]];
    const m2 = arr_val[1] * massConvert[arr_unit[1]];
    const r = arr_val[2] * distanceConvert[arr_unit[2]];

    const F = (G * m1 * m2) / (r * r);

    return F;
};