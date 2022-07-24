
const ID_SLUD_SEPARATOR = '-_';

export function slugify(str: string, id: any): string {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str + ID_SLUD_SEPARATOR + id;
}

export function getIdFromSlug(slug: string): any {
    const parts = slug.split(ID_SLUD_SEPARATOR);
    return parseInt(parts[parts.length - 1]);
}

export function substring(str: string, length: number) {
    if (str.length > length) {
        return str.substring(0, length) + '...';
    }
    return str;
}
