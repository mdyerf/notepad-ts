export function limitString(_string:string, limit = 185) {
    if (_string.length <= limit) return _string;
    return _string.substring(0, limit - 3) + "...";
  }
  