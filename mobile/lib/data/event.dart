import 'package:mobile/data/sport.dart';

class Event {
  late String date;
  late String id;
  late List<Null> medalHolders;
  late String name;
  late Sport sport;
  late String day;
  late String hours;

  Event(
      {required this.date,
      required this.id,
      required this.medalHolders,
      required this.name,
      required this.sport,
      required this.day,
      required this.hours});

  Event.fromJson(Map<String, dynamic> json) {
    date = json['date'];
    id = json['_id'];
    name = json['name'];
    sport = new Sport.fromJson(json['sport']);
    day = json['day'];
    hours = json['hours'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['date'] = this.date;
    data['_id'] = this.id;
    data['name'] = this.name;
    data['sport'] = this.sport.toJson();
    data['day'] = this.day;
    data['hours'] = this.hours;
    return data;
  }
}
